const footer = () => {
    return (
      <>
        <div className="p-16">
            <p className="text-center">Contact : {process.env.EMAIL? process.env.EMAIL : "bobeuf.jules@gmail.com"}</p>
        </div>
      </>
    );
};

export default footer;