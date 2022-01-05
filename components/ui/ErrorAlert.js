function ErrorAlert(props) {
  return <div className="my-4 mx-auto py-10 px-8 w-11/12 max-w-2xl bg-[#f02f49] font-bold text-2xl text-center text-blue-400 rounded-md">
    {props.children}
  </div>;
}

export default ErrorAlert;
