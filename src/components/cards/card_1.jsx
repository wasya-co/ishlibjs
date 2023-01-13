

const W0 = styled.div`
width: 680px;
border: 1px solid black;
border-radius: 10px;

// box-shadow: -12px 12px 2px 1px rgba(0, 0, 255, .2);

--ish-shadow-size: 3px;
--ish-card-bg: white;

box-shadow: var(--ish-shadow-size) var(--ish-shadow-size) calc( 2 * var(--ish-shadow-size)) #b2b8c9, var(--ish-shadow-size) var(--ish-shadow-size) calc( 2 * var(--ish-shadow-size)) #f0f8ff;
background: var(--ish-card-bg);
min-height: 50vh;
margin: 30px auto 130px auto ;
padding: .5em;
`;

const Card = ({ children, ...props} ) => {
return (<W0>{children}</W0>)
}


