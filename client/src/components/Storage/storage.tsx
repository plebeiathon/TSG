import React, { Component } from 'react';

import './storage.scss';
import { StorageProps, StorageModel, StorageState } from './storage.types';
import Pagination from '../Pagination/pagination';

class Storage extends Component<StorageProps, StorageState> {
    state = {
        currentStorage: [],
        currentPage: 1,
        totalPages: 1,
    };

    constructor(props: Readonly<StorageProps>) {
        super(props);
        this.generateTable = this.generateTable.bind(this);
    }

    generateTable() {
        let storageTable: Array<JSX.Element> = [],
            { currentStorage } = this.state;

        currentStorage.forEach((element: StorageModel) => {
            let {
                id,
                product_name,
                product_amount,
                product_group,
                distribution_to,
                distribution_from,
                pack_date,
            } = element;

            storageTable.push(
                <tr className="tablehover" property="row" mv-multiple="true" key={id}>
                    <td property="date">{`${new Date(pack_date).getMonth()}/${new Date(pack_date).getDate()}/${new Date(
                        pack_date,
                    ).getFullYear()}`}</td>
                    <td property="name">{product_name}</td>
                    <td property="itemnumber">{id}</td>
                    <td property="quantity">{product_amount}</td>
                    <td property="product">{product_group}</td>
                    <td property="distributionTO">{distribution_to}</td>
                    <td property="distributionFROM">{distribution_from}</td>
                </tr>,
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th id="date">Date</th>
                        <th id="name">Name</th>
                        <th id="itemnumber">Item #</th>
                        <th id="quantity">Quantity</th>
                        <th id="product">Product</th>
                        <th id="distributionTO">To </th>
                        <th id="product">From </th>
                    </tr>
                </thead>
                <tbody>{storageTable}</tbody>
            </table>
        );
    }

    onPageChanged = (data: { currentPage: number; totalPages: number; pageLimit: number }) => {
        const { storage } = this.props;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentStorage = storage.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentStorage, totalPages });
    };

    render() {
        const totalItemsInStorage = this.props.storage.length;

        if (totalItemsInStorage === 0) return null;

        return (
            <section className="STORAGE">
                <div className="center7">
                    <div className="right">
                        <div className="title">Food Storage</div>
                        <br />
                        <div className="container">
                            <div className="row">
                                <div className="searchtitle">
                                    <h2>Search: &nbsp;</h2>
                                </div>
                                <div className="col-md-10">
                                    <input type="text" className="search" />
                                </div>
                            </div>
                        </div>
                        <main>
                            {this.generateTable()}
                            <div className="storagepaging">
                                <br />
                                <Pagination
                                    totalRecords={totalItemsInStorage}
                                    pageLimit={10}
                                    pageNeighbours={1}
                                    onPageChanged={this.onPageChanged}
                                />
                            </div>
                            <div className="bar">
                                <button className="add-row">Add Row</button>

                                <div className="mv-bar mv-ui">
                                    <button className="mv-save">Save</button>
                                    <button className="mv-export mv-button">Export</button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <a
                    className="inspiration"
                    href="https://github.com/PhinesTech"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PhinesTech
                </a>
            </section>
        );
    }
}

export default Storage;
