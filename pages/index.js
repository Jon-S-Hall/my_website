import Head from 'next/head'
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/Layout'
import styles from '../styles/Landing.module.css'
import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    //generates random coordinates in a ring between outer and inner. center position is assumed to be 0.
    function random_ring_coordinate_generator(outer, inner)
    {
        let dist = Math.random()*(outer-inner) + inner; //random distance in ring
        let angle = Math.random()*2; //angle in radians

        let position = {
            y:dist*Math.sin(angle*Math.PI),
            x:dist*Math.cos(angle*Math.PI),
            z:Math.random()*100 - 50
        }
        return position;
    }

    function instantiate_canvas(ctx) {
        let vertices = [];
        let skew = Math.random() - 0.5;
        const center_x = window.innerWidth/2;
        const center_y = window.innerHeight/2;
        const center_z = 0;
        const outer_radius = Math.min(window.innerHeight, window.innerWidth)/2;
        const inner_radius = Math.min(window.innerHeight, window.innerWidth)/2 - Math.min(window.innerHeight, window.innerWidth)/5;

        //basing number of vertices on screen size. This should allow smaller devices (less cpu) to display more easily
        let numVertices = 0;
        console.log("outer_radius: " + outer_radius)
        if(outer_radius > 350)
        {
            numVertices = 25
        }else if(outer_radius > 300)
        {
            numVertices = 20
        }else if(outer_radius > 250)
        {
            numVertices = 17
        }else if(outer_radius > 200)
        {
            numVertices = 15
        }else
        {
            numVertices = 10
        }

        for(let i = 0; i < numVertices; i++) //above 500 points makes frame rate really slow (5 fps)
        {
            let pos = random_ring_coordinate_generator(outer_radius, inner_radius);
            let vertex = {
                x: pos.x + center_x,
                y: pos.y + center_y,
                z: pos.z + center_z,
                vel_x: Math.random()*4 - 2,
                vel_y: Math.random()*4 - 2 + skew,
                vel_z: Math.random()*8 - 4
            }
            vertices[i] = vertex;
        }
        return vertices;
    }

    function update_vert(vertex)
    {
        const outer_radius = Math.min(window.innerHeight, window.innerWidth)/2;
        const inner_radius = Math.min(window.innerHeight, window.innerWidth)/2 - Math.min(window.innerHeight, window.innerWidth)/5;
        const center_x = window.innerWidth/2;
        const center_y = window.innerHeight/2;
        const center_z = 0;
        vertex.x = vertex.x + vertex.vel_x;
        vertex.y = vertex.y + vertex.vel_y;
        vertex.z = vertex.z + vertex.vel_z;

        let dist_from_center = Math.pow(Math.pow(vertex.x - center_x, 2) + Math.pow(vertex.y-center_y, 2) + Math.pow(vertex.z - center_z, 2), 0.5);

        //move stray points back to safe ground
        if(dist_from_center > outer_radius + 3
            || vertex.x > window.innerWidth
            || vertex.x < 0
            || vertex.y > window.innerHeight
            || vertex.y < 0
            || dist_from_center < inner_radius - 3
        )
        {
            let pos = random_ring_coordinate_generator(outer_radius, inner_radius);
            vertex.x = pos.x + center_x;
            vertex.y = pos.y + center_y;
            vertex.z = pos.z + center_z;
        }else if(dist_from_center > outer_radius)
        {
            vertex.vel_x = -vertex.vel_x;
            vertex.vel_y = -vertex.vel_y;
            vertex.vel_z = -vertex.vel_z;
        }else if(dist_from_center < inner_radius)
        {
            // this can trap points in inner radius
            vertex.vel_x = -vertex.vel_x;
            vertex.vel_y = -vertex.vel_y;
            vertex.vel_z = -vertex.vel_z;
        }
        return vertex;
    }

    function update_canvas(ctx, vertices)
    {
        for(let i = 0; i < vertices.length; i++)
        {
            vertices[i] = update_vert(vertices[i])
        }
        return vertices
    }

    const draw = (ctx, frameCount, vertices) => {

            ctx.canvas.width  = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);

            const smallestDimension = Math.min(window.innerHeight, window.innerWidth);

        const outer_radius = smallestDimension/2;
        const inner_radius = smallestDimension/2 - smallestDimension/5;

            const center_x = window.innerWidth/2;
            const center_y = window.innerHeight/2;
            const center_z = 50;

            for(let i = 0; i < vertices.length-1; i++)
            {
                let vertex = vertices[i];
                ctx.globalAlpha = 1
                for(let j = i + 1; j < vertices.length; j++) {
                    let pair = vertices[j];
                    let lineDist = Math.pow(Math.pow(vertex.x - pair.x, 2) + Math.pow(vertex.y - pair.y, 2) + Math.pow(vertex.z - pair.z, 2), 0.5)
                    ctx.globalAlpha = Math.max(0, (1000 - lineDist) / 1000)
                    //r is based onx, g is based on y, b is based on z.
                    let x_source_ratio = (vertex.x - center_x + outer_radius) / (smallestDimension+20); //0-1
                    let y_source_ratio = (vertex.y - center_y + outer_radius) / (smallestDimension+20); //0-1
                    let z_source_ratio = (vertex.z - center_z + outer_radius) / (smallestDimension+20); //0-1
                    if (x_source_ratio < 0.064)
                    {
                        x_source_ratio = 0.064;
                    }
                    if (y_source_ratio < 0.064)
                    {
                        y_source_ratio = 0.064;
                    }
                    if (z_source_ratio < 0.064)
                    {
                        z_source_ratio = 0.064;
                    }


                    let x_dest_ratio = (pair.x - center_x + outer_radius)/(smallestDimension+20); //0-1
                    let y_dest_ratio = (pair.y - center_y + outer_radius)/(smallestDimension+20); //0-1
                    let z_dest_ratio = (pair.z - center_z + outer_radius)/(smallestDimension+20); //0-1

                    if (x_dest_ratio < 0.064)
                    {
                        x_dest_ratio = 0.064;
                    }
                    if (y_dest_ratio < 0.064)
                    {
                        y_dest_ratio = 0.064;
                    }
                    if (z_dest_ratio < 0.064)
                    {
                        z_dest_ratio = 0.064;
                    }

                    let x_source_coef = Math.floor(x_source_ratio*255).toString(16);
                    let y_source_coef = Math.floor(y_source_ratio*255).toString(16);
                    let z_source_coef = Math.floor(z_source_ratio*255).toString(16);
                    let x_dest_coef = Math.floor(x_dest_ratio*255).toString(16);
                    let y_dest_coef = Math.floor(y_dest_ratio*255).toString(16);
                    let z_dest_coef = Math.floor(z_dest_ratio*255).toString(16);

                    var gradient = ctx.createLinearGradient(vertex.x+5, vertex.y+5, pair.x+5, pair.y+5);
                    gradient.addColorStop(0, "#" + x_source_coef + y_source_coef + z_source_coef);
                    gradient.addColorStop(1, "#" + x_dest_coef + y_dest_coef + z_dest_coef);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(vertex.x+5, vertex.y+5); //lol, what is 5 for?
                    ctx.lineTo(pair.x+5, pair.y + 5);
                    ctx.stroke();
                }
            }
        ctx.globalAlpha = 0
        ctx.rect(window.innerWidth/2-300, window.innerHeight/2-100, 600, 200);
        ctx.fillStyle = '#AAA';
        ctx.fill();

    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        let vertices = instantiate_canvas(context);
        //Our draw came here

        const render = () => {
            frameCount++
            if(frameCount%2 == 0) {
                vertices = update_canvas(context, vertices)
                draw(context, frameCount, vertices)
            }
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (
        <div className={styles.main}>
            <canvas className={styles.canvas} ref={canvasRef}  {...props}/>
            <div className={styles.head_container}>
                <div className={styles.head_div}>
                    <p className={styles.head_text}>
                        Hi I'm Jon.
                    </p>
                </div>
                <div className={styles.head_div}>
                    <p className={styles.sub_text}>
                        I try and make stuff.
                    </p>
                </div>
                <div className={styles.head_div}>
                    <div className={styles.b_wrap}>
                        <div className={styles.button}>
                            <a href={"/Home"}>
                                <button className={styles.button_text}>
                                    This is stuff by Jon.
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Canvas
