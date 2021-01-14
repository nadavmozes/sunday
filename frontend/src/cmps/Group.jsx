
import { Task } from '../cmps/Task';

export function Group({ group }) {
    //   const group = board[0].groups[0]
    return (
        <div>
            <table>
                <tr><th>{group.name}</th>  <th>Members </th><th>Status </th><th>Date </th></tr>
                <Task tasks={group.tasks[0]} />
                {/* <Task Task={Task[0]}/> */}
            </table>

        </div>
    )
}