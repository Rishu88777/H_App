import React from 'react'
import "./Monitoringcart.scss";


export default function Monitoringcart({item}) {
    const handlebuy = (index) => {
        if(index === 1){
            window.open(
                'https://www.flipkart.com/beewear-100-new-arrival-smart-health-tracker-watch-compatible-all-smartphones-smartwatch/p/itmfc6e01f829295',
                '_blank'
              );
        }
        if(index === 2){
            window.open(
                'https://www.flipkart.com/control-d-homely-cport-bp-monitor-automatic-accurate-digital-blood-pressure-machine/p/itm1a1dd02866920?pid=BPMGHE8ZQFHSWGMW&lid=LSTBPMGHE8ZQFHSWGMWLKECWN&marketplace=FLIPKART&q=bp+monitor&store=zlw%2Fnyl%2Fbvv%2Fkbk&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=en_2vN-uWitnKrC7tbTkTu0LB9N_fppdU8Ru5AGi4flvgOP_Y7PWm4IVOef_eU47rcS68cupoIGbMgOLRBK96FQ0Q%3D%3D&ppt=sp&ppn=sp&ssid=9nj3hlkqtc0000001690790992229&qH=40de99272f4d252f',
                '_blank'
              );
        }
        if(index === 3){
            window.open(
                'https://www.flipkart.com/keel-mineral-ro-copper-audi-12-ltr-water-filter-l-uv-uf-tds-purifier/p/itmd4c6b946f0129?pid=WAPGEGBWZM8WGJPJ&lid=LSTWAPGEGBWZM8WGJPJDQSMDG&marketplace=FLIPKART&store=j9e%2Fabm%2Fi45&srno=b_1_2&otracker=browse&fm=organic&iid=en_TPi_ktxLMkdjr60hb0osgATYprAfjhnj1ULpCKrRMfz4TDuXyzA-wgOsjBA8CEw_Bs-5OwgeSuwFifXvJfA9zA%3D%3D&ppt=None&ppn=None&ssid=1enelk8dow0000001690791155104',
                '_blank'
              );
        }
        if(index === 4){
            window.open(
                'https://www.flipkart.com/evolife-cardiofonic-stethoscope-manual/p/itmfd1e6584a2af4?pid=STHFYZMHQA6YDHJZ&lid=LSTSTHFYZMHQA6YDHJZW98E5W&marketplace=FLIPKART&q=doctor+equipment&store=zlw%2Fnyl&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_na&fm=search-autosuggest&iid=en_a37IPoMBrYjR1_JRYtswM1JbFIB5H_m5vnRNWr4L-YXOwSmjqpC26RhQVc1lZUzt3mEiEI9y1q8C9hyZtL340Q%3D%3D&ppt=sp&ppn=sp&ssid=dwa9glfte80000001690791188734&qH=ea9a4b3b72884945',
                '_blank'
              );
        }
        if(index === 5){
            window.open(
                'https://www.flipkart.com/mamaearth-rosemary-hair-growth-oil-methi-dana-promoting/p/itm08b9aecc4ca66?pid=HOLGQ2RH5PQREJCP&lid=LSTHOLGQ2RH5PQREJCPJ5DYKX&marketplace=FLIPKART&q=oil&store=search.flipkart.com&srno=s_1_9&otracker=search&otracker1=search&fm=Search&iid=1d3966df-812e-4013-ba68-7524960cd587.HOLGQ2RH5PQREJCP.SEARCH&ppt=sp&ppn=sp&ssid=hx4sihr80g0000001690791215578&qH=c5af0543407a6e8b',
                '_blank'
              );
        }
        
        else{
            window.open('https://www.flipkart.com/', '_blank')
        }

    }
    return (
        <>
        <div className="wearable-device" onClick={() => handlebuy(item.id)}>
            <div className="device-image">
                <img src={item.img} alt="" />
            </div>
            <div className="device-info">
                <h2>{item.title}</h2>
                <p>
                    {item.desc}
                </p>
                <button className="buy-now-btn">Buy Now</button>
            </div>
            </div>
        </>
    )
}
