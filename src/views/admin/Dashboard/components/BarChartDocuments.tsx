import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
export const BarChartDocuments = () => {
    const data = [
        {name: 'Contrato',total: 20,color:"#9878B3"},
        {name: 'Factura', total: 55,color:"#00BCD4"},
        {name: 'Curriculum', total: 10,color:"#4DA851"},
      
      ];
    const colors = ["#9878B3","#00BCD4","#4DA851"]
    return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}
        margin={{ top: 0, right: -10, left: -10, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="right" stroke="#03275b" />
        <YAxis yAxisId="right" orientation="left" stroke="#E91E63" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="right" dataKey="total" fill="#E91E63" name="Total">
          {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
        </Bar>
      
      </BarChart>
    </ResponsiveContainer>
    )
}
