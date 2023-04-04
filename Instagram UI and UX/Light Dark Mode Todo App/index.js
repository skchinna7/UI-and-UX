function toggleDone(b) {
    const index = demoarray.findIndex(myitem.id == Number(b));
    demoarray[index].checked = !demoarray[index].checked;
    renderTodo(demoarray[index]);
}

function deleteTodo(c) {
    const index = demoarray.findIndex(myitem.id == Number(c));
    const emptytodo = {
        delete: true,
        ...demoarray[index]
    };
    demoarray = demoarray.filter(myitem => myitem.id !== Number(c));
    renderTodo(emptytodo);
}

