import styled from "styled-components";


export const HomeContainer = styled.div`


`

export const HeroContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    text-align: start;
    
    img{
        width: 100%;
        height: 100%;
        filter: blur(3px);
    }
    span{
        position: absolute;
        z-index: 5;
        left: 0;
        padding: 0px 8rem;
        h1{
            max-width: 600px;
            font-size: 4rem;
            color: white;
        }
        button{
            border: 5px solid #ff422a;
            padding: 0.5rem 1.7rem;
            background-color: transparent;
            color: white;
            font-size: 1.5rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.5s ease-out;
            :hover{
                background-color: #ff422a;

            }
        }
    }


`

export const AttractionContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        max-width: 800px;
        position: relative;
        margin-top: 70px;
        background-color: white;
        z-index: 80;
        span{
            position: absolute;
            height: 100px;
            width: 100px;
            border: 5px solid #ff422a;
            left: -2rem;
            margin-right: -50px;
            top: -1.3rem;
            z-index: -600;
            
        }
    }
    .attractions-grid{
        max-width: 1200px;
        display: grid;
        margin-top: 60px;
        margin-top: 0;
        
        grid-template-columns: 1fr 10px 1fr;
        height: 400px;
        
        width: 100%;
        
        
        .attraction-img{
            /* background: blue; */
            img{

                object-fit: contain;
                height: 100%;
                width: 100%;
            }
        }
        .line{
            background: black;
        }
        .attraction-info{
            /* background: red; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            h4{
                font-size: 22px;
                margin-bottom: 5px;
            }
            p{

            font-size: 18px;
            }


        }
    }
`

