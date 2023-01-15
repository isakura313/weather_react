import {useRouteError} from 'react-router-dom'


function ErrorPage(){
    const error:any = useRouteError()

    return(
        <div id="error-page">
            <h1>Oops</h1>
            <p>Sorry, an expected error</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage