import React from 'react';
import Topbar from "../utils/topbar/Topbar";
import Sidebar from "../utils/sidebar/Sidebar";
import FeaturedInfo from "../utils/featuredInfo/FeaturedInfo";
import WidgetSm from "../utils/widgetSm/WidgetSm";
import WidgetLg from "../utils/widgetLg/WidgetLg";
import { userData } from "../dummyData";
import "./home.css";
import Chart from "../utils/chart/Chart";

const AdminHome = () => {
    return (
        <>
            <Topbar />
            <div className="contener container">
                <Sidebar />
                <div className="home">
                    <FeaturedInfo />
                    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                    <div className="homeWidgets">
                        <WidgetSm />
                        <WidgetLg />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome
