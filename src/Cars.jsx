import Card from "./components/Card"    

function Cars(props) {
    const {data} = props
    return(
        <>
            {
                data.map((el, index) => {
                    return (
                        <Card key={index} title={el.title} start={el.start_production} clas={el.class} img={el.image}/>
                    );
                })
            }
        </>
    )
}

export default Cars;