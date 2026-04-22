import { deleteItem } from '../api';

export default function ItemList({ items = [], onRefresh }) {
    const handleDelete = async (id) => {
        try {
            await deleteItem(id);
            onRefresh();
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    if (!Array.isArray(items)) {
        return (
            <div>
                <h2>Items</h2>
                <p>No items available</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Items</h2>

            {items.length === 0 ? (
                <p>No items found</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item._id}
                        style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}
                    >
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p><strong>Price: ${item.price}</strong></p>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
}