function cover_area_extrude_2_outline_fn(){
    return new CSG.Path2D([[83.4,-141.7951331],[83.4,-73.0832848]]).appendArc([89.2559156,-65.6861117],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([132.9870235,-55.3753173]).appendArc([134.4781789,-55.1767003],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([152.3039411,-54.583128]).appendArc([153.3512866,-54.6205517],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([174.9558317,-56.8912809]).appendArc([175.9874528,-57.0722774],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([210.8176725,-65.6965064]).appendPoint([231.4869464,-68.3242707]).appendArc([238.1213265,-76.2052149],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([235.0325948,-144.8632051]).appendArc([234.2711085,-147.8532683],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([220.8444743,-175.3819483]).appendArc([210.8315376,-178.9520831],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([176.759124,-163.2427646]).appendPoint([89.7967895,-149.2992842]).appendArc([83.4,-141.7951331],{"radius":7.6,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function cover_wide_wall_extrude_8_5_outline_fn(){
    return new CSG.Path2D([[83.4,-141.7951331],[83.4,-73.0832848]]).appendArc([89.2559156,-65.6861117],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([132.9870235,-55.3753173]).appendArc([134.4781789,-55.1767003],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([152.3039411,-54.583128]).appendArc([153.3512866,-54.6205517],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([174.9558317,-56.8912809]).appendArc([175.9874528,-57.0722774],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([210.8176725,-65.6965064]).appendPoint([231.4869464,-68.3242707]).appendArc([238.1213265,-76.2052149],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([235.0325948,-144.8632051]).appendArc([234.2711085,-147.8532683],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([220.8444743,-175.3819483]).appendArc([210.8315376,-178.9520831],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([176.759124,-163.2427646]).appendPoint([89.7967895,-149.2992842]).appendArc([83.4,-141.7951331],{"radius":7.6,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[86.5,-141.7951331],[86.5,-73.0832848]]).appendArc([89.9673185,-68.7033797],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([133.6984263,-58.3925853]).appendArc([134.5813473,-58.2749831],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([152.4071094,-57.6814108]).appendArc([153.0272482,-57.7035696],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([174.6317935,-59.9742988]).appendArc([175.2429876,-60.0815583],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([210.2477234,-68.7489988]).appendPoint([231.0965396,-71.399589]).appendArc([235.0244587,-76.0658953],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([231.935727,-144.7238857]).appendArc([231.484847,-146.4943178],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([218.0582127,-174.0229978]).appendArc([212.1295002,-176.1368934],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([177.6703736,-160.2492782]).appendPoint([90.2875727,-146.2383805]).appendArc([86.5,-141.7951331],{"radius":4.5,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 8.5] });
}


function cover_thin_wall_extrude_14_outline_fn(){
    return new CSG.Path2D([[83.4,-141.7951331],[83.4,-73.0832848]]).appendArc([89.2559156,-65.6861117],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([132.9870235,-55.3753173]).appendArc([134.4781789,-55.1767003],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([152.3039411,-54.583128]).appendArc([153.3512866,-54.6205517],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([174.9558317,-56.8912809]).appendArc([175.9874528,-57.0722774],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([210.8176725,-65.6965064]).appendPoint([231.4869464,-68.3242707]).appendArc([238.1213265,-76.2052149],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([235.0325948,-144.8632051]).appendArc([234.2711085,-147.8532683],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([220.8444743,-175.3819483]).appendArc([210.8315376,-178.9520831],{"radius":7.6,"clockwise":true,"large":false}).appendPoint([176.759124,-163.2427646]).appendPoint([89.7967895,-149.2992842]).appendArc([83.4,-141.7951331],{"radius":7.6,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[84.6,-141.7951331],[84.6,-73.0832848]]).appendArc([89.5312974,-66.8540864],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([133.2624052,-56.543292]).appendArc([134.5181151,-56.3760356],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([152.3435947,-55.7824728]).appendArc([153.2258524,-55.813978],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([174.8303976,-58.0847071]).appendArc([175.6993679,-58.2371839],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([210.597047,-66.8781164]).appendPoint([231.3358846,-69.5147246]).appendArc([236.922539,-76.1512847],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([233.8338072,-144.809275]).appendArc([233.1925557,-147.3272229],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([219.7659214,-174.855903]).appendArc([211.3339747,-177.8623323],{"radius":6.4,"clockwise":true,"large":false}).appendPoint([177.1118657,-162.0839956]).appendPoint([89.9870492,-148.1144629]).appendArc([84.6,-141.7951331],{"radius":6.4,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 14] });
}




                function cover_case_fn() {
                    

                // creating part 0 of case cover
                let cover__part_0 = cover_area_extrude_2_outline_fn();

                // make sure that rotations are relative
                let cover__part_0_bounds = cover__part_0.getBounds();
                let cover__part_0_x = cover__part_0_bounds[0].x + (cover__part_0_bounds[1].x - cover__part_0_bounds[0].x) / 2
                let cover__part_0_y = cover__part_0_bounds[0].y + (cover__part_0_bounds[1].y - cover__part_0_bounds[0].y) / 2
                cover__part_0 = translate([-cover__part_0_x, -cover__part_0_y, 0], cover__part_0);
                cover__part_0 = rotate([0,0,0], cover__part_0);
                cover__part_0 = translate([cover__part_0_x, cover__part_0_y, 0], cover__part_0);

                cover__part_0 = translate([0,0,0], cover__part_0);
                let result = cover__part_0;
                
            

                // creating part 1 of case cover
                let cover__part_1 = cover_wide_wall_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let cover__part_1_bounds = cover__part_1.getBounds();
                let cover__part_1_x = cover__part_1_bounds[0].x + (cover__part_1_bounds[1].x - cover__part_1_bounds[0].x) / 2
                let cover__part_1_y = cover__part_1_bounds[0].y + (cover__part_1_bounds[1].y - cover__part_1_bounds[0].y) / 2
                cover__part_1 = translate([-cover__part_1_x, -cover__part_1_y, 0], cover__part_1);
                cover__part_1 = rotate([0,0,0], cover__part_1);
                cover__part_1 = translate([cover__part_1_x, cover__part_1_y, 0], cover__part_1);

                cover__part_1 = translate([0,0,0], cover__part_1);
                result = result.union(cover__part_1);
                
            

                // creating part 2 of case cover
                let cover__part_2 = cover_thin_wall_extrude_14_outline_fn();

                // make sure that rotations are relative
                let cover__part_2_bounds = cover__part_2.getBounds();
                let cover__part_2_x = cover__part_2_bounds[0].x + (cover__part_2_bounds[1].x - cover__part_2_bounds[0].x) / 2
                let cover__part_2_y = cover__part_2_bounds[0].y + (cover__part_2_bounds[1].y - cover__part_2_bounds[0].y) / 2
                cover__part_2 = translate([-cover__part_2_x, -cover__part_2_y, 0], cover__part_2);
                cover__part_2 = rotate([0,0,0], cover__part_2);
                cover__part_2 = translate([cover__part_2_x, cover__part_2_y, 0], cover__part_2);

                cover__part_2 = translate([0,0,0], cover__part_2);
                result = result.union(cover__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return cover_case_fn();
            }

        