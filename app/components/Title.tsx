type props = {
    title: string;
    subtitle: string;
};

const Title = ({ title, subtitle }: props) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Title;
