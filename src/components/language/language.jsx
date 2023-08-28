import  i18n from 'i18next';
const Languageswitcher=()=>{
const selectHandler=(e)=>{
    i18n.changeLanguage(e.target.value)
}
    return(
        <>
        <select onChange={selectHandler} className='select_language'>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
        </>
    )
}
export default Languageswitcher