import corporateImg from './corporate.jpg';

function MainContent(props) { 
    return (
       <main>
          <section>
                <img src={corporateImg} alt="Corporate" />
                <p>At {props.companyName} we leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>  

                <p>The <b>Text</b> is: {props.str}</p>
                <p>The <b>Number</b> is: {props.num}</p>
                <p>The <b>Truth</b> is {props.truth}</p>
                <p>The <b>Array</b> is: {props.arr[0]}</p>
                <p>The <b>username</b> in <b>users</b> object is: {props.obj.name}</p>
          </section>
       </main>
    )
 }
 
 export default MainContent;