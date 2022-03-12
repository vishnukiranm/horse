interface Props {
    url: string,
}
const AboutCard = ({ url }: Props) => (
    <div style={{ background: `url('${url}')`, width: "100%", color: "#fff" }} className="p-5" >
        <div className="row">
            <div className="col-md-2 text-center text-md-start my-auto">
                <h3>About Us</h3>
            </div>
            <div className="col-md-10 p-3" style={{ backgroundColor: "#333", opacity: 0.8 }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada, dolor eu vulputate faucibus, mauris leo gravida orci, et lacinia tellus dui dignissim velit. Sed congue vestibulum ipsum, feugiat lobortis erat scelerisque vel. Suspendisse sit amet quam lacus. Aliquam in sollicitudin lectus, in tristique turpis. Sed et bibendum nisl. Duis rhoncus hendrerit sem commodo eleifend. Duis eu odio hendrerit, finibus nisl at, accumsan velit. Sed tellus sem, rutrum a purus in, blandit dignissim orci. Ut condimentum elit lorem, at facilisis massa rhoncus at. Curabitur sed eros ex. Aenean non tincidunt tortor, et volutpat ligula. Vivamus ac interdum metus. Praesent nisl mi, egestas in ex id, commodo malesuada magna. Suspendisse at varius nisi, a volutpat lectus. Integer sit amet nunc eget erat vulputate volutpat.
                </p>
            </div>
        </div>
    </div>
);


export default AboutCard;
