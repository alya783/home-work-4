class Table {
    constructor() {
        this.table = $('.table-responsive');
        this.headersSelector = '.tabulator-col-title';
        this.cellSelector = '.tabulator-cell';
        this.rowSelector = '.tabulator-row';
    }

    async headers() {
        return this.table.$$(this.headersSelector).map(async (header) => {
            return { element: await header, name: await header.getText() };
        })
    }

    rows() {
        return $$(this.rowSelector);
    }

    async data() {
        const rows = await this.rows();
        const result = rows.map(async (row) => {
                let result = {};
                const cells = await row.$$(this.cellSelector);
                let index = 0;
                for (const cell of cells) {
                    console.log(await cell.getText());
                    result[(await this.headers())[index].name] = await cell;
                    index += 1;
                }
                return result;
            }
        )
        return await Promise.all(result);
    }
}

module.exports = { Table: new Table() };
