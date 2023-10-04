import {useForm} from 'react-hook-form'

export default function FormWork() {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const SubmitNameAge =( data ) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(SubmitNameAge) }>
            <input type="text"
            {...register(
                'name',{
                required : '이름은 필수 항목입니다'
                }
            )} />
            <br/>
            {errors.name && <div style={{color: "red"}}>{errors.name.message}</div>}
            <input type='number'
            {...register(
                'age',{
                    min : {message : "0 이상의 숫자만 입력해주세요", value : 1}
                }
            )}
            />
            <br/>
            {errors.age?.message}
            <button type="submit">Submit</button>
        </form>
    )
}