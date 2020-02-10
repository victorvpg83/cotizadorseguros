
// year diference
export function difYear(year) {
    return new Date().getFullYear() - year
}

// auto brand
export function calcBrand(brand) {
    let increment

    switch (brand) {
        case 'american':
            increment=1.15
            break;
        case 'european':
            increment=1.30
            break;
        case 'asian':
            increment=1.05
            break;
    
        default:
            break;
    }

    return increment
}

//Insurance type

export function insType(plan) {
  return (plan=== 'basic')? 1.20 : 1.50
  
}

export function toUppercase(text) {
    return text.charAt(0).toUppercase()+ text.slice(1)
}