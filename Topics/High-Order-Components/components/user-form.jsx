import { includeUpdatableUser } from "./include-updatable-user";
import { includeUpdatableResource } from "./include-updatable-resource";

// export const UserInfoForm = includeUpdatableUser(
//   ({ user, onChangeUser, onPostUser, onResetUser }) => {
//     const { name, age } = user || {};

//     return user ? (
//       <>
//         <label>
//           Name:
//           <input
//             type='text'
//             value={name}
//             onChange={(e) => onChangeUser({ name: e.target.value })}
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type='number'
//             value={age}
//             onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
//           />
//         </label>

//         <button type='button' onClick={onResetUser}>
//           Reset
//         </button>
//         <button type='submit' onClick={onPostUser}>
//           Save
//         </button>
//       </>
//     ) : (
//       <h3>Loading...</h3>
//     );
//   },
//   "3"
// );

export const UserInfoForm = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type='number'
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>

        <button type='button' onClick={onResetUser}>
          Reset
        </button>
        <button type='submit' onClick={onPostUser}>
          Save
        </button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/3",
  "user"
);
