const Label = (props: {label: string, type: number}) => {
  let classes = 'py-4 text-black text-center';
  let typeSettings = [
    '',
    ' text-3xl lg:text-5xl 2xl:text-[6xl]',  // 1
    ' text-2xl lg:text-4xl 2xl:text-5xl',    // 2
  ]
  classes += typeSettings[props.type];
  return ( 
    <h1 className={classes}> {props.label} </h1> 
  );
}

export default Label;