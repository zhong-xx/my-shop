import React from 'react'

const Rating = ( { value, text }) => {
    const total = (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-xingxing"></use>
        </svg>
    )

    const half = (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-qumanmanbanxing"></use>
        </svg>
    )

    const emtry = (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-xingxing1"></use>
        </svg>
    )

    return (
        <div>
            {
                value >= 1? total: (value >=0.5? half: emtry)
            }
            {
                value >= 2? total: (value >=1.5? half: emtry)
            }
            {
                value >= 3? total: (value >=2.5? half: emtry)
            }
            {
                value >= 4? total: (value >=3.5? half: emtry)
            }
            {
                value >= 5? total: (value >=4.5? half: emtry)
            }
            <span style={{marginLeft: '10px'}}>{text && text}</span>
        </div>
    )
}

export default Rating
