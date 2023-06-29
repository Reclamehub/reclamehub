import { Box } from "@chakra-ui/react"


export const ClientSlider = () => {


    return (
        <Box display={{ base: "inline", sm: "inline", md: "none", lg: "none", xl: "none" }}>
            <div class="container">
                <h2>OUR CLIENTS</h2>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div class="carousel-inner">

                        <div class="item active">
                            <img src="c1.png" alt="Los Angeles" style={{ width: "100%" }} />
                        </div>

                        <div class="item">
                            <img src="c2.png" alt="Chicago" style={{ width: "100%" }} />
                        </div>

                        <div class="item">
                            <img src="c3.png" alt="New York" style={{ width: "100%" }} />

                        </div>




                        <div class="item active">
                            <img src="c4.png" alt="Los Angeles" style={{ width: "100%" }} />

                        </div>

                        {/* <div class="item">
                            <img src="c5.png" alt="Chicago" style={{ width: "100%" }} />
                        </div>

                        <div class="item">
                            <img src="c6.png" alt="New York" style={{ width: "100%" }} />

                        </div>


                        <div class="item active">
                            <img src="c7.png" alt="Los Angeles" style={{ width: "100%" }} />

                        </div>

                        <div class="item">
                            <img src="c8.png" alt="Chicago" style={{ width: "100%" }} />
                        </div>

                        <div class="item">
                            <img src="c9.png" alt="New York" style={{ width: "100%" }} />

                        </div>


                        <div class="item active">
                            <img src="c10.png" alt="Los Angeles" style={{ width: "100%" }} />

                        </div>

                        <div class="item">
                            <img src="c11.png" alt="Chicago" style={{ width: "100%" }} />
                        </div>

                        <div class="item">
                            <img src="c12.png" alt="New York" style={{ width: "100%" }} />

                        </div> */}

                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </Box>
    )
}