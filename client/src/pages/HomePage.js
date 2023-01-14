const HomePage = () => {
    return ( 
        <div className="grid grid-cols-1 bg-green-100">
            <img src={require(`../assets/images.jpeg`)} alt="" />
            <div className="bg-green-100">
                <h4>Welcome</h4>
            </div>
        </div>
     );
}
 
export default HomePage;