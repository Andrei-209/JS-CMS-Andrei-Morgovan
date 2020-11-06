// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD
const data = {
    posts: [],
};
let counter = 0;

const add = (table, item) => { // create
    item.id = counter++;
    data[table].push(item);
    return item;
};
const getBy = (table, key, value) => { //read by key
    const item = data[table].find(item => item[key] === value);
    return item;
};
const get = (table, id) => { // read
    return getBy(table, 'id', id);
};
const set = (table, id, updatedItem) => { // update
    const itemIndex = data[table].findIndex(item => item.id === id);

    if (findIndex === -1) {
        updatedItem.id = id;
        data[table].push(updatedItem);
        return updatedItem;
    } else {
        const item = data[table][itemIndex];
        return item;
    }
};
const remove = (table, id) => { // delete
    const itemIndex = data[table].findIndex(item => item.id === id);
    delete data[table][itemIndex];
    if (itemIndex === -1) {
        return false;
    } else {
        return itemIndex;
    }

};

const getAll = (table) => {
    return data[table]; // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
    data[table] = [];
};

module.exports = { add, getBy, get, set, remove, getAll, removeAll };
