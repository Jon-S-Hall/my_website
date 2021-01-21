import Head from 'next/head'
import {Component, useEffect} from 'react'
import Chart from "chart.js";
import ReactDOM from 'react-dom'
import dynamic from 'next/dynamic'
import Layout, { siteTitle } from '../../components/Layout'
import styles from '../../styles/Sorting.module.css'
import utilStyles from '../../styles/utils.module.css'
import {Bar} from 'react-chartjs-2'


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var bubbleChart;
var insertChart;


class sorting extends Component{

    state =  {
        length:10,
        arr:0,
        bubble_idx:0,
    }



    on_num_change = (event) => {
        var newArr = [...Array(parseInt(event.target.value))].map(() => Math.floor(Math.random() * 99));
        this.setState({length: event.target.value,  arr: newArr})
        bubbleChart.clear();
        insertChart.clear();
        this.chartManager(newArr);

    }

    chartManager(arr){

        window.bubbleChart.data.datasets[0].data = arr;
        window.bubbleChart.data.labels = arr;
        window.bubbleChart.update();

        window.insertChart.data.datasets[0].data = arr;
        window.insertChart.data.labels = arr;
        window.insertChart.update();
    }
    componentDidMount() {
        var newArr = [...Array(10)].map(() => Math.floor(Math.random() * 99));
        this.setState({length: 10,  arr: newArr})
        this.chartManager(newArr);
    }

    clear_graphs(arr){
        bubbleChart.clear()
        insertChart.clear()
        var bubble_graph = document.getElementById("bubble_graph")
        var insert_graph = document.getElementById("insert_graph")
        bubbleChart = new Chart(bubble_graph, {
            type: 'bar',
            data: {
                labels: arr,
                datasets: [{
                    label: "bubble sort",
                    data: arr,
                    backgroundColor: "#000000",
                }]
            },
            options: {
                events:[],
                animation:{
                    duration:0
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            min: 0,
                            max: arr.length,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min:0,
                            max:100,
                        }
                    }]
                },
                showTooltips: false
            }
        });
        insertChart = new Chart(insert_graph, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: "insert sort",
                    data: [],
                    backgroundColor: "#0000ff",
                }]
            },
            options: {
                events:[],
                showTooltips: false,
                animation:{
                    duration:0
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            min: 0,
                            max:1000,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min:0,
                            max:100,
                        }
                    }]
                }
            }
        });

    }

    async sort(arr) {
        //this.clear_graphs(arr);
        let bubble_arr = arr,
            bubble_idx = 0,
            bubble_iters = 0,
            bubble_comps = 0

        let bubble_vec = [bubble_arr, bubble_idx, bubble_iters, bubble_comps, 0];

        let insert_arr = arr,
            insert_smallest=0,
            insert_idx = 0,
            insert_iters = 0,
            insert_comps=0

        let insert_vec = [insert_arr, insert_smallest, insert_idx, insert_iters, insert_comps, 0];


        for(let i = 0; i < 10000; i++)
        {
            if(bubble_vec[4] == 0) {
                bubble_vec = this.bubble_sort(bubble_vec[0], bubble_vec[1], bubble_vec[2], bubble_vec[3], bubble_vec[4]);
            }

            if(insert_vec[5]==0){
                insert_vec = this.insertion_sort(insert_vec[0], insert_vec[1], insert_vec[2], insert_vec[3], insert_vec[4], insert_vec[5]);
            }
            await sleep(    1)

        }
    }

    bubble_sort(arr, idx, iter, comps, done){  //put in unsorted array.
        comps = comps + 1;
        let cur = arr[idx];
        let next = arr[idx+1];
        if(next < cur){
            arr[idx+1] = cur;
            arr[idx] = next;
        }

        bubbleChart.data.datasets[0].data = arr;
        bubbleChart.data.datasets[0].label = "Number of Comparisons: " + comps;
        bubbleChart.data.labels = arr;
        bubbleChart.options.scales.xAxes = [{ticks: {min:0, max:arr.length}}]
        bubbleChart.update();

        if(iter == arr.length){
            return [arr, idx, iter, comps, 1]
        }

        if(idx >= arr.length - iter){
            //this happens once per array iteration
            idx = 0;
            iter = iter + 1;
        }else{
            idx= idx+1;
        }

        return [arr, idx, iter, comps, 0]
    }

    insertion_sort(i_arr, smallest, idx, iter, comps, done){  //put in unsorted array.
        comps = comps + 1; //counts number of comparisons
        var smallest_val = i_arr[smallest];
        let comp_val = i_arr[idx];
        if(comp_val < smallest_val){
            smallest = idx;
        }

        if(idx >= i_arr.length){
            //now we swap smallest idx with iter
            if((iter) == smallest){//we never swapped
                //do nothing
            }else{
                var temp = i_arr[smallest];
                i_arr[smallest] = i_arr[iter];
                i_arr[iter] = temp;

                insertChart.data.datasets[0].data = i_arr;
                insertChart.data.datasets[0].label = "Number of Comparisons: " + comps;
                insertChart.data.labels = i_arr;
                insertChart.options.scales.xAxes = [{ticks: {min:0, max:10000}}]
                insertChart.update();
            }
            iter= iter +1;
            smallest = iter;
            idx = iter+1;

        }else{
            idx= idx+1;
        }



        if(iter == i_arr.length){ //we're done
            return [i_arr, smallest, idx, iter, comps, 1]
        }



        return [i_arr, smallest, idx, iter, comps, 0]
    }



    render() {
        var changes = this.state.length;
        return (
                <body className={styles.sort_main}>
                    <div className={styles.banner}>
                        <h1 className={utilStyles.heading2Xl}>
                            Sorting
                        </h1>
                        <form>
                            <label for={"num_elements"}>Number of Elements: {changes} </label>
                            <select name={"num_elements"} id = "num_elements" onChange={this.on_num_change}>
                                <option value={10}> 10      </option>
                                <option value={50}> 50      </option>
                                <option value={100}> 100    </option>
                                <option value={500}> 500    </option>
                                <option value={1000}> 1000  </option>
                            </select>
                        </form>
                    </div>
                    <section className={styles.top_section}>
                        <div className={styles.sort_div}>
                            <div className={styles.sort_banner}>
                                <h1 className={utilStyles.headingXl} id={"bubble"}> Bubble Sort </h1>
                                <div className={styles.sort_graph}>
                                    <canvas id="bubble_graph" width="400" height="340"></canvas>
                                </div>
                            </div>

                        </div>
                        <div className={styles.sort_div}>
                            <div className={styles.sort_banner}>
                                <h1 className={utilStyles.headingXl} id={"bubble"}> Insertion Sort </h1>
                                <div className={styles.sort_graph}>
                                    <canvas id="insert_graph" width="400" height="340"></canvas>
                                </div>
                            </div>
                        </div>

                    </section>

                    <button id="start" onClick={async() => {await this.sort(this.state.arr, this.state.charts)}}>start</button>
                </body>
        );
    }
}


export default sorting;