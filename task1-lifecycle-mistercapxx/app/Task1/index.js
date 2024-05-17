// const { useState, useEffect } = require("react");

export default class Task1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null,
            isLoading : true
        };
    }

    componentDidMount() {
       this.fetchData();
    }
    fetchData(){
        fetch('http://localhost:3000/list') 
        .then(response => response.json())
        .then(data => {
            this.setState({ list: data, isLoading: false });
        })
 
    }

    render() {
        const { list,isLoading } = this.state;

        return (
            <div>
 {isLoading ? (
    <div>Loading...</div>
 ): (
    <div>
        <ul>
{list.map((item) => (
    <li key={item.id}>id - {item.id}
    name - {item.name}
    note - {item.note}
    </li>
))}
 </ul>
 </div>
      
)}
</div>
        )
}
}


////func alternative


// const Task1 = () => {
//     const [list, setList] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//       }, []);

//       const fetchData = () => {
//         fetch('http://localhost:3000/list')
//         .then(response => response.json())
//         .then(d => {
//             setList(d);
//             setIsLoading(false);
//         })

//       };

//       return (

//         <div>
//             {isLoading ? (
//                 <div>Loading...</div>

//             ) : (
//                 <div>
//                     <ul>
//                         {list.map(item => (
//                             <li key={item.id}>
//                                  id - {item.id}, name - {item.name}, note - {item.note}
//                             </li>
//                         ))}
//                     </ul>
            
//         </div>
//       )}
//       </div>
//       )
// }

// export default Task1;


  
