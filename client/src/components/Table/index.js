import React from 'react';
import "./style.css";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import TableData from "../TableData";


var index = 0;
function handleRenderTable(props) {

    return props.allBooks.map((data) => (
        <TableRow >
            <TableData data={data.title} />
            <TableData data={data.author} />
            <TableData data={data.synopsis} />
        </TableRow >
    ))
}

export default function Table(props) {

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
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
