

const page = ({ blogItems }) => {
    return (
        <section className="blog-section">
            {blogItems.map(blogItem => (
                <div key={blogItem.id} className="blog-item">
                    <h2>{blogItem.title}</h2>
                    <p>{blogItem.content}</p>
                </div>
            ))}
        </section>
    );
};

export default page;

