const footer = () => {
    return (
      <>
        <div className="p-16">
            <h1 className="text-center">Contact : {process.env.EMAIL? process.env.EMAIL : "bobeuf.jules@gmail.com"}</h1>
        </div>
      </>
    );
};

export default footer;