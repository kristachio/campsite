const Partner = ({ partner }) => {
    if(partner) {
        const { description, image, name } = partner;
        return (
            <>
                <img 
                    style={{width: '150px'}}
                    src={image}
                    alt={name}
                />
                <div className="m-4">
                <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        );
    }
    return null;
};


export default Partner;