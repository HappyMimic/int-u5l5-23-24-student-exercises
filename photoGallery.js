// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.querySelector("#imageContainer");


// 2. Add at least four image urls to the imageUrls array
let imageUrls = [
    "https://images.unsplash.com/photo-1508263073532-98ed924de82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5maW5pdHklMjB3YWxsfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1678937611339-0dedf2114e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VpcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1549313861-33587f3d2956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VpcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1635107510862-53886e926b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VpcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1593415553970-bd0145efc369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VpcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1610616817237-dff4b556cce6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlaXJkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1626792133251-db513424bc2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdlaXJkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1605548587049-8bda5bfdbbf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdlaXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1695517712559-8f89dd1aa69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdlaXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1682125180774-6792938ac2a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHdlaXJkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1652765361512-d3cc43360d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdlaXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1737246740365-e218fdc70c2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdlaXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1663853120531-188fa32e322e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHdlaXJkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1589720393736-a39adf8eeef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdlaXJkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592067284261-cb1092d519ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHdlaXJkfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1515775356328-191f2e02390e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHdlaXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1747712103450-47bf2f8517a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHdlaXJkfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1737242902375-b39bfc7c2ef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1737246740394-ed7deaceefc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1712139692744-6c109f59e437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1671641797521-c25e48432521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1565031103382-84b4a15710c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1511264827770-095d5f6db91e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1747711995700-542f3b936493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1737147326269-e1a6aa72972c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1757420142289-a602604ead71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661963975538-db20d2973e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664304957378-982c7669ceda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1522933001375-72d29575cf05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM5fHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1603481502680-db196f967e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcxfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1737147325319-3674945b64be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgyfHx3ZWlyZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1518737496070-5bab26f59b3f?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach(function(url){
    let image = document.createElement("img");
    image.src = url;
    image.id = "image" + imageUrls.indexOf(url);
    imageContainer.appendChild(image);
});

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
