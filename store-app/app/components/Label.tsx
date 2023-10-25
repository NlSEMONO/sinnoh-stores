const Label = (props: {label: string, type: number, color?: string}) => {
  let classes:string = `py-4 text-black text-center text-${props.color === null ? 'black' : props.color}`;
  let typeSettings:Array<string> = [
    '',
    ' text-3xl lg:text-5xl 2xl:text-[6xl]',  // 1
    ' text-2xl lg:text-4xl 2xl:text-5xl',    // 2
    ' text-5xl' // 3
  ]
  classes += typeSettings[props.type];
  return ( 
    <h1 className={classes}> {props.label} </h1> 
  );
}

export default Label;