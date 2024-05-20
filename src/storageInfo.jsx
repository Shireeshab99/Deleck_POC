import './App.css';
import { useParams } from 'react-router';

// import data from "./db.json"

const data = [
    {
        id: 1,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 1,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 1,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 1,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 2,
        name: "Aliet",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 2,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 3,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
    {
        id: 3,
        name: "John",
        entry_time: "2024-05-14 14:54:43",
        exit_time: "2024-05-14 14:54:43",
        detected_items: "hard hat",
        detected_images: "",
        danger_alert: "True"
    },
]

function StorageInfo() {
    const { id } = useParams();
    const selectedId = parseInt(id);
    return (
        <div className="App">
             <div className="cam-list-title">
                <h4>Cam Storage Info :</h4>
            </div>
            <div className="cam-list-table">
            <table className="data-table">
                <thead>
                <tr>
                    <th>Person Id</th>
                    <th>Person Name</th>
                    <th>Entry Time</th>
                    <th>Exit Time</th>
                    <th>Detected Items</th>
                    <th>Detected Images</th>
                    <th>Danger Alert</th>
                </tr>
                </thead>
                <tbody>
                {data
                   .filter((item) => item.id === selectedId)
                    ?.map((val, key) => (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.entry_time}</td>
                            <td>{val.exit_time}</td>
                            <td>{val.detected_items}</td>
                            <td>{val.detected_images}</td>
                            <td>{val.danger_alert}</td>
                        </tr>
                    ))}
                </tbody>                
            </table>
            </div>
        </div>
    )
}
export default StorageInfo;