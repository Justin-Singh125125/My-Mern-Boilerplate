import React from 'react';
import "./style.css";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import TableData from "../TableData";

function addOne(props) {
    index++;
    if (index > props.allBooks.length) {
        index = 0;
    }
    return index;
}

var index = 0;
function handleRenderTable(props) {
    console.log(props.allBooks);
    return props.allBooks.map((data) => (
        <TableRow >
            <TableHeader index={addOne(props)} />
            <TableData data={data.title} />
            <TableData data={data.author} />
            <TableData data={data.synopsis} />
        </TableRow >
    ))



    // <TableRow>
    //     <TableHeader />
    //     <TableData />
    //     <TableData />
    //     <TableData />
    // </TableRow>
}

export default function Table(props) {

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Synopsis</th>
                    </tr>
                </thead>
                <tbody>

                    {props.allBooks.length !== 0 ? handleRenderTable(props) : ""}


                </tbody>
            </table>
        </div>
    )
}
