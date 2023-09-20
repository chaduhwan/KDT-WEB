import React, { Component } from 'react';

class Board extends Component {
    state = {
        writer: "",
        title: "",
        boardlist: [], 

        search: "",
        searchOption : "title",
        filteredBoard : [],
        style:{display:"table-row"}
    }

    // 입력 필드의 값을 변경할 때 상태를 업데이트하는 핸들러 함수를 추가합니다.
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // 작성 버튼을 클릭했을 때 실행되는 함수를 추가합니다.
    handleBoardSubmit = (e) => {
        e.preventDefault();
        const newBoardItem = {
            writer: this.state.writer,
            title: this.state.title,
        };
        this.setState((prevState) => ({
            boardlist: [...prevState.boardlist, newBoardItem],
            writer: "", 
            title: "", 
        }));
    }


    searchBoard = () => {
        const { search, searchOption, boardlist } = this.state;
        const searchValue = boardlist.filter(value => {
            if ( searchOption === "title") {
                return value.title === search
            } else {
                return value.writer === search
            }
        })
        this.setState({style:{display:"none"}})
        this.setState({filteredBoard : searchValue})

    }


    render() {
        return (
            <>
                <form onSubmit={this.handleBoardSubmit}>
                    작성자 : <input
                        type="text"
                        name="writer"
                        value={this.state.writer}
                        onChange={this.handleInputChange}
                    />
                    제목 : <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">작성</button>
                </form>

                <select name='searchOption' value={this.state.searchOption}  onChange={this.handleInputChange}>
                    <option value={"title"}>제목</option>
                    <option value={"search"}>작성자</option>
                </select>

                <input 
                type="text" 
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
                />
                <button onClick={this.searchBoard}>검색</button>
                
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.boardlist.map((value, index) => {
                            return (
                                <tr style={this.state.style} key={index}>
                                    <td>{index}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            )
                        })}
                        {this.state.filteredBoard.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Board;
