
import { GroupPreview } from './GroupPreview';
import { Task } from './TaskList';

export function GroupList({ groups }) {
    //   const group = board[0].groups[0]
    console.log(groups)
    return (
        <div>
            <h1>CHECK12</h1>
            {groups.map(({name,tasks})=> {
                <GroupPreview name={name} tasks={tasks}/>
            })}
        </div>
        // <div>
        //     <table>
        //         <tr><th>{group.name}</th>  <th>Members </th><th>Status </th><th>Date </th></tr>
        //         <Task tasks={group.tasks[0]} />
        //         {/* <Task Task={Task[0]}/> */}
        //     </table>

        // </div>
    )
}