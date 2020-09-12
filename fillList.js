var array = [1, 2, 3, 'Dillertjavs!!!!'];
    
    document.getElementById('list').appendChild(createList(array));

    function createList(array) {
        var list = document.createElement('ul');
    
        for(var i = 0; i < array.length; i++) {
            //Create list element
            var item = document.createElement('li');
        
            //set element content
            item.appendChild(document.createTextNode(array[i]));
        
            //add item to list
            list.appendChild(item);
        }
    
    return list;
    } 