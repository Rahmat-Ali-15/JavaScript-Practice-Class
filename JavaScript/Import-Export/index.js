const navbar = (x,y)=>{
    
    return `<nav>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkw_mXXQ9FJ9HgmW_B9QMv-gvOmndUaEI9SA&s" alt="img">
        <ul>
            <li><a href="./home.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

    </nav>
    
    <h1>sum of the data ${x+y}</h1>
    
    `
}

/*default method
export default navbar; */

const style = () => {
    return `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            text-decoration: none;
            color: black;
        }
        nav{
            display: flex;
            justify-content: space-between;
            padding: 10px 50px;
        }
        img{
            width: 50px;
            height: 50px;
        }
        ul{
            display: flex;
            gap: 20px;
            font-size: 24px;
        }`
}

/* name export*/

export {navbar, style}

// ES6 method -> Ecma Script module

/*export const navbar = ()=>{
    return `<nav>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkw_mXXQ9FJ9HgmW_B9QMv-gvOmndUaEI9SA&s" alt="img">
        <ul>
            <li><a href="./home.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>`
}
*/

/* 



*/




