

const cardStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif'
};

const nameStyle = {
  fontSize: '24px',
  marginBottom: '10px',
  color: '#333333'
};

const descriptionStyle = {
  fontSize: '18px',
  marginBottom: '20px',
  color: '#666666'
};

const interestsStyle = {
  fontSize: '20px',
  marginBottom: '15px',
  color: '#444444'
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#0073b1',
  color: '#ffffff',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  textDecoration: 'none',
  display: 'inline-block'
};

const twitterButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#1da1f2'
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none'
};

export function BusinessCard({propss}) {
  return (
    <div>
        {propss.map(function(props){
            return <div style={cardStyle} key={props._id}>
            <h1 style={nameStyle}>{props.name}</h1>
            <h3 style={descriptionStyle}>{props.description}</h3>
            <h2 style={interestsStyle}>{props.interests}</h2>
            {/* <ul style={interestsStyle}>
              {props.interest.map(function(interest){
                 
                      <li key={interest}>{interest}</li>
                  
              })}
            </ul> */}
            <button style={buttonStyle}>
              <a style={linkStyle} href={props.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </button>
            <button style={twitterButtonStyle}>
              <a style={linkStyle} href={props.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </button></div>
        })}
    
    
    </div>

  );
}


