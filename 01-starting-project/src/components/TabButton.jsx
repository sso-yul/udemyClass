// label 사용 시
// export default function TabButtom({label}) {
//     return(
//         <li>
//             <button>
//                 {label}
//             </button>
//         </li>
//     );
// }

// 아래와 같음
// export default function TabButtom(props) {
//     return(
//         <li><button>{props.children}</button></li>
//     );
// }

// document.querySelector("button").addEventListener("click", () => {}) -> 바닐라 자바스크립트


export default function TabButtom({ children, isSelected, ...props }) {         // onSelect,  대신 프롭스 넣었음
    return(
        <li>
            {/* 여기서 ()를 넣으면 화면이 렌더링될 때 실행되기 때문에 버튼 클릭 시 리액트에서 실행시키기 위해 괄호 안 넣음 */}
            <button className={isSelected ? "active" : undefined} {...props}>  {/* onClick={ onSelect } 대신 프롭스 넣었음 */}
                {children}
            </button>
        </li>
    );
}