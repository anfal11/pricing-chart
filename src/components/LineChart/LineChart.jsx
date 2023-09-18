import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Rovi', mathMarks: 84, physicsMarks: 75, chemistryMarks: 92 },
        { id: 2, name: 'Alif', mathMarks: 89, physicsMarks: 80, chemistryMarks: 88 },
        { id: 3, name: 'Ashik', mathMarks: 77, physicsMarks: 68, chemistryMarks: 75 },
        { id: 4, name: 'Hasib', mathMarks: 67, physicsMarks: 62, chemistryMarks: 70 },
        { id: 5, name: 'Ashiqur', mathMarks: 72, physicsMarks: 70, chemistryMarks: 78 },
        { id: 6, name: 'Mim', mathMarks: 82, physicsMarks: 75, chemistryMarks: 85 },
        { id: 7, name: 'Salek', mathMarks: 60, physicsMarks: 55, chemistryMarks: 62 },
        { id: 8, name: 'Sifat', mathMarks: 88, physicsMarks: 82, chemistryMarks: 90 },
        { id: 9, name: 'Jewel', mathMarks: 70, physicsMarks: 65, chemistryMarks: 72 },
        { id: 10, name: 'Abid', mathMarks: 80, physicsMarks: 72, chemistryMarks: 84 }
    ];
    
    return (
        <div className='max-w-7xl mx-auto mt-12 p-5'>
            <LC  width={800} height={300} data={studentData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line   dataKey="mathMarks" stroke='red'/>
            <Line   dataKey="physicsMarks" stroke='blue'/>
            <Line   dataKey="chemistryMarks" stroke='green'/>
            </LC>
        </div>
    );
};

export default LineChart;