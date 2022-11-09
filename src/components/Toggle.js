const Toggle = (props) => {
  return (
    <div className={`mainc ${props.themeChange} `}>
      <h1 className="maincH1">{props.name}</h1>
      <span className="maincSpan">
        {props.time}, {props.dur} min read
      </span>
      <h5 className="maincH5">{props.des}</h5>
    </div>
  );
};

export default Toggle;
