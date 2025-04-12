function case_area_extrude_3_6_outline_fn(){
    return new CSG.Path2D([[85,-141.7951331],[85,-73.0832848]]).appendArc([89.6230913,-67.2434113],{"radius":6,"clockwise":true,"large":false}).appendPoint([133.3541991,-56.9326169]).appendArc([134.5314271,-56.775814],{"radius":6,"clockwise":true,"large":false}).appendPoint([152.3571893,-56.1822417]).appendArc([153.184041,-56.2117868],{"radius":6,"clockwise":true,"large":false}).appendPoint([174.7885862,-58.4825159]).appendArc([175.6035118,-58.6255287],{"radius":6,"clockwise":true,"large":false}).appendPoint([210.5235053,-67.2719864]).appendPoint([231.2857176,-69.9115662]).appendArc([236.5229431,-76.133308],{"radius":6,"clockwise":true,"large":false}).appendPoint([233.4342114,-144.7912983]).appendArc([232.833038,-147.1518745],{"radius":6,"clockwise":true,"large":false}).appendPoint([219.4064038,-174.6805545]).appendArc([211.5014538,-177.499082],{"radius":6,"clockwise":true,"large":false}).appendPoint([177.2294463,-161.6977393]).appendPoint([90.050097,-147.7194629]).appendArc([85,-141.7951331],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3.6] });
}


function walls_extrude_14_6_outline_fn(){
    return new CSG.Path2D([[85,-141.7951331],[85,-73.0832848]]).appendArc([89.6230913,-67.2434113],{"radius":6,"clockwise":true,"large":false}).appendPoint([133.3541991,-56.9326169]).appendArc([134.5314271,-56.775814],{"radius":6,"clockwise":true,"large":false}).appendPoint([152.3571893,-56.1822417]).appendArc([153.184041,-56.2117868],{"radius":6,"clockwise":true,"large":false}).appendPoint([174.7885862,-58.4825159]).appendArc([175.6035118,-58.6255287],{"radius":6,"clockwise":true,"large":false}).appendPoint([210.5235053,-67.2719864]).appendPoint([231.2857176,-69.9115662]).appendArc([236.5229431,-76.133308],{"radius":6,"clockwise":true,"large":false}).appendPoint([233.4342114,-144.7912983]).appendArc([232.833038,-147.1518745],{"radius":6,"clockwise":true,"large":false}).appendPoint([219.4064038,-174.6805545]).appendArc([211.5014538,-177.499082],{"radius":6,"clockwise":true,"large":false}).appendPoint([177.2294463,-161.6977393]).appendPoint([90.050097,-147.7194629]).appendArc([85,-141.7951331],{"radius":6,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[88,-141.7951331],[88,-73.0832848]]).appendArc([90.3115456,-70.1633481],{"radius":3,"clockwise":true,"large":false}).appendPoint([134.0426534,-59.8525537]).appendArc([134.6312674,-59.7741522],{"radius":3,"clockwise":true,"large":false}).appendPoint([152.4570296,-59.1805799]).appendArc([152.8704555,-59.1953524],{"radius":3,"clockwise":true,"large":false}).appendPoint([174.4750008,-61.4660816]).appendArc([174.8824635,-61.537588],{"radius":3,"clockwise":true,"large":false}).appendPoint([209.9154468,-70.2120228]).appendArc([210.0296775,-70.2333515],{"radius":1,"clockwise":false,"large":false}).appendPoint([230.9073615,-72.8876117]).appendArc([233.5259743,-75.9984826],{"radius":3,"clockwise":true,"large":false}).appendPoint([230.4372426,-144.656473]).appendArc([230.1366559,-145.8367611],{"radius":3,"clockwise":true,"large":false}).appendPoint([216.7100216,-173.3654411]).appendArc([212.7575466,-174.7747048],{"radius":3,"clockwise":true,"large":false}).appendPoint([178.2360467,-158.858332]).appendArc([177.9756663,-158.7790694],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.5250484,-144.757298]).appendArc([88,-141.7951331],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 14.6] });
}


function stands_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[177.570818,-84.5159523],[236.5459663,-90.7144901]]).appendArc([237.6450167,-89.8244967],{"radius":1,"clockwise":false,"large":false}).appendPoint([239.1293208,-75.7022857]).appendArc([238.2393274,-74.6032353],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.2641791,-68.4046975]).appendArc([178.1651287,-69.2946909],{"radius":1,"clockwise":false,"large":false}).appendPoint([176.6808246,-83.4169019]).appendArc([177.570818,-84.5159523],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[166.6683649,-150.1298339],[219.9668519,-176.125243]]).appendArc([221.3040171,-175.6648201],{"radius":1,"clockwise":false,"large":false}).appendPoint([227.5288874,-162.9019446]).appendArc([227.0684645,-161.5647794],{"radius":1,"clockwise":false,"large":false}).appendPoint([173.7699775,-135.5693704]).appendArc([172.4328123,-136.0297933],{"radius":1,"clockwise":false,"large":false}).appendPoint([166.207942,-148.7926688]).appendArc([166.6683649,-150.129834],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 1.5] });
}


function screw_holes_extrude_4_6_outline_fn(){
    return CAG.circle({"center":[209.6104457,-139.8682308],"radius":1.1})
.union(
    CAG.circle({"center":[163.5137696,-147.9440563],"radius":1.1})
).union(
    CAG.circle({"center":[170.9823284,-76.885467],"radius":1.1})
).union(
    CAG.circle({"center":[109,-138.1],"radius":1.1})
).union(
    CAG.circle({"center":[109,-87.1],"radius":1.1})
).extrude({ offset: [0, 0, 4.6] });
}


function screw_heads_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[209.6104457,-139.8682308],"radius":2.05})
.union(
    CAG.circle({"center":[163.5137696,-147.9440563],"radius":2.05})
).union(
    CAG.circle({"center":[170.9823284,-76.885467],"radius":2.05})
).union(
    CAG.circle({"center":[109,-138.1],"radius":2.05})
).union(
    CAG.circle({"center":[109,-87.1],"radius":2.05})
).extrude({ offset: [0, 0, 1.5] });
}




                function _stands_case_fn() {
                    

                // creating part 0 of case _stands
                let _stands__part_0 = stands_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _stands__part_0_bounds = _stands__part_0.getBounds();
                let _stands__part_0_x = _stands__part_0_bounds[0].x + (_stands__part_0_bounds[1].x - _stands__part_0_bounds[0].x) / 2
                let _stands__part_0_y = _stands__part_0_bounds[0].y + (_stands__part_0_bounds[1].y - _stands__part_0_bounds[0].y) / 2
                _stands__part_0 = translate([-_stands__part_0_x, -_stands__part_0_y, 0], _stands__part_0);
                _stands__part_0 = rotate([0,0,0], _stands__part_0);
                _stands__part_0 = translate([_stands__part_0_x, _stands__part_0_y, 0], _stands__part_0);

                _stands__part_0 = translate([0,0,0], _stands__part_0);
                let result = _stands__part_0;
                
            
                    return result;
                }
            
            

                function _mounting_holes_case_fn() {
                    

                // creating part 0 of case _mounting_holes
                let _mounting_holes__part_0 = screw_holes_extrude_4_6_outline_fn();

                // make sure that rotations are relative
                let _mounting_holes__part_0_bounds = _mounting_holes__part_0.getBounds();
                let _mounting_holes__part_0_x = _mounting_holes__part_0_bounds[0].x + (_mounting_holes__part_0_bounds[1].x - _mounting_holes__part_0_bounds[0].x) / 2
                let _mounting_holes__part_0_y = _mounting_holes__part_0_bounds[0].y + (_mounting_holes__part_0_bounds[1].y - _mounting_holes__part_0_bounds[0].y) / 2
                _mounting_holes__part_0 = translate([-_mounting_holes__part_0_x, -_mounting_holes__part_0_y, 0], _mounting_holes__part_0);
                _mounting_holes__part_0 = rotate([0,0,0], _mounting_holes__part_0);
                _mounting_holes__part_0 = translate([_mounting_holes__part_0_x, _mounting_holes__part_0_y, 0], _mounting_holes__part_0);

                _mounting_holes__part_0 = translate([0,0,0], _mounting_holes__part_0);
                let result = _mounting_holes__part_0;
                
            

                // creating part 1 of case _mounting_holes
                let _mounting_holes__part_1 = screw_heads_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _mounting_holes__part_1_bounds = _mounting_holes__part_1.getBounds();
                let _mounting_holes__part_1_x = _mounting_holes__part_1_bounds[0].x + (_mounting_holes__part_1_bounds[1].x - _mounting_holes__part_1_bounds[0].x) / 2
                let _mounting_holes__part_1_y = _mounting_holes__part_1_bounds[0].y + (_mounting_holes__part_1_bounds[1].y - _mounting_holes__part_1_bounds[0].y) / 2
                _mounting_holes__part_1 = translate([-_mounting_holes__part_1_x, -_mounting_holes__part_1_y, 0], _mounting_holes__part_1);
                _mounting_holes__part_1 = rotate([0,0,0], _mounting_holes__part_1);
                _mounting_holes__part_1 = translate([_mounting_holes__part_1_x, _mounting_holes__part_1_y, 0], _mounting_holes__part_1);

                _mounting_holes__part_1 = translate([0,0,0], _mounting_holes__part_1);
                result = result.union(_mounting_holes__part_1);
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = case_area_extrude_3_6_outline_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = walls_extrude_14_6_outline_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _stands_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.subtract(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = _mounting_holes_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.subtract(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        