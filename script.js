// url = https://en.wikipedia.org/wiki/List_of_cities_in_Vietnam
function arrayify(collection) {
    return Array.prototype.slice.call(collection);
}

function factory(headings) {
    return row => arrayify(row.cells).reduce((prev, curr, i) => {
        prev[headings[i]] = curr.innerText;
        return prev;
    }, {})
}

const tables = document.querySelectorAll('.wikitable');
const headings = arrayify(tables[0].tHead.rows[0].cells).map(header => header.innerText);

centrallyCities = arrayify(tables[0].tBodies[0].rows).map(factory(headings));
provincialCities = arrayify(tables[1].tBodies[0].rows).map(factory(headings));