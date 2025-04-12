function plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[89,-141.7951331],[89,-73.0832848]]).appendArc([90.5410304,-71.1366603],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.2721382,-60.8258659]).appendArc([134.6645475,-60.7735983],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.4903098,-60.180026]).appendArc([152.765927,-60.1898743],{"radius":2,"clockwise":true,"large":false}).appendPoint([174.3704723,-62.4606035]).appendArc([174.6421141,-62.5082744],{"radius":2,"clockwise":true,"large":false}).appendPoint([208.0977135,-70.7921369]).appendArc([209.6060585,-72.9425668],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.5062515,-130.978353]).appendArc([204.6218103,-132.9865831],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.6171843,-144.1506637]).appendArc([228.5412875,-146.8265791],{"radius":2,"clockwise":true,"large":false}).appendPoint([215.8112276,-172.9270699]).appendArc([213.1762442,-173.8665791],{"radius":2,"clockwise":true,"large":false}).appendPoint([178.6547443,-157.9502062]).appendArc([178.1339835,-157.7916811],{"radius":2,"clockwise":false,"large":false}).appendPoint([90.6833656,-143.7699097]).appendArc([89,-141.7951331],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[209.6104457,-139.8682308],"radius":1.1})
.union(
    CAG.circle({"center":[163.5137696,-147.9440563],"radius":1.1})
).union(
    CAG.circle({"center":[170.9823284,-76.885467],"radius":1.1})
).union(
    CAG.circle({"center":[109,-138.1],"radius":1.1})
).union(
    CAG.circle({"center":[109,-87.1],"radius":1.1})
).union(
    new CSG.Path2D([[215.9260758,-164.4793767],[221.9755976,-152.0760189]]).appendPoint([209.5722398,-146.0264971]).appendPoint([203.522718,-158.4298549]).appendPoint([215.9260758,-164.4793767]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-88.9],[124.9,-88.9]]).appendPoint([124.9,-75.1]).appendPoint([111.1,-75.1]).appendPoint([111.1,-88.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-105.9],[124.9,-105.9]]).appendPoint([124.9,-92.1]).appendPoint([111.1,-92.1]).appendPoint([111.1,-105.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-122.9],[124.9,-122.9]]).appendPoint([124.9,-109.1]).appendPoint([111.1,-109.1]).appendPoint([111.1,-122.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-139.9],[124.9,-139.9]]).appendPoint([124.9,-126.1]).appendPoint([111.1,-126.1]).appendPoint([111.1,-139.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-88.9],[106.9,-88.9]]).appendPoint([106.9,-75.1]).appendPoint([93.1,-75.1]).appendPoint([93.1,-88.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-105.9],[106.9,-105.9]]).appendPoint([106.9,-92.1]).appendPoint([93.1,-92.1]).appendPoint([93.1,-105.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-122.9],[106.9,-122.9]]).appendPoint([106.9,-109.1]).appendPoint([93.1,-109.1]).appendPoint([93.1,-122.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-139.9],[106.9,-139.9]]).appendPoint([106.9,-126.1]).appendPoint([93.1,-126.1]).appendPoint([93.1,-139.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.3387194,-155.5047471],[196.6041308,-159.3085427]]).appendPoint([200.4079264,-146.0431313]).appendPoint([187.142515,-142.2393357]).appendPoint([183.3387194,-155.5047471]).close().innerToCAG()
).union(
    new CSG.Path2D([[190.1673493,-86.6443077],[203.8917515,-88.0868005]]).appendPoint([205.3342443,-74.3623983]).appendPoint([191.6098421,-72.9199055]).appendPoint([190.1673493,-86.6443077]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.3903654,-103.5511799],[202.1147676,-104.9936727]]).appendPoint([203.5572604,-91.2692705]).appendPoint([189.8328582,-89.8267777]).appendPoint([188.3903654,-103.5511799]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.6133815,-120.4580521],[200.3377837,-121.9005449]]).appendPoint([201.7802765,-108.1761427]).appendPoint([188.0558743,-106.7336499]).appendPoint([186.6133815,-120.4580521]).close().innerToCAG()
).union(
    new CSG.Path2D([[184.8363976,-137.3649243],[198.5607998,-138.8074171]]).appendPoint([200.0032926,-125.0830149]).appendPoint([186.2788904,-123.6405221]).appendPoint([184.8363976,-137.3649243]).close().innerToCAG()
).union(
    new CSG.Path2D([[172.5272763,-82.2764906],[186.2516785,-83.7189834]]).appendPoint([187.6941713,-69.9945812]).appendPoint([173.9697691,-68.5520884]).appendPoint([172.5272763,-82.2764906]).close().innerToCAG()
).union(
    new CSG.Path2D([[170.7502924,-99.1833628],[184.4746946,-100.6258556]]).appendPoint([185.9171874,-86.9014534]).appendPoint([172.1927852,-85.4589606]).appendPoint([170.7502924,-99.1833628]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.9733085,-116.090235],[182.6977107,-117.5327278]]).appendPoint([184.1402035,-103.8083256]).appendPoint([170.4158013,-102.3658328]).appendPoint([168.9733085,-116.090235]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.1963246,-132.9971072],[180.9207268,-134.4396]]).appendPoint([182.3632196,-120.7151978]).appendPoint([168.6388174,-119.272705]).appendPoint([167.1963246,-132.9971072]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.4193407,-149.9039794],[179.1437429,-151.3464722]]).appendPoint([180.5862357,-137.62207]).appendPoint([166.8618335,-136.1795772]).appendPoint([165.4193407,-149.9039794]).close().innerToCAG()
).union(
    new CSG.Path2D([[154.8872034,-77.9086735],[168.6116056,-79.3511663]]).appendPoint([170.0540984,-65.6267641]).appendPoint([156.3296962,-64.1842713]).appendPoint([154.8872034,-77.9086735]).close().innerToCAG()
).union(
    new CSG.Path2D([[153.1102195,-94.8155457],[166.8346217,-96.2580385]]).appendPoint([168.2771145,-82.5336363]).appendPoint([154.5527123,-81.0911435]).appendPoint([153.1102195,-94.8155457]).close().innerToCAG()
).union(
    new CSG.Path2D([[151.3332356,-111.7224179],[165.0576378,-113.1649107]]).appendPoint([166.5001306,-99.4405085]).appendPoint([152.7757284,-97.9980157]).appendPoint([151.3332356,-111.7224179]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.5562517,-128.6292901],[163.2806539,-130.0717829]]).appendPoint([164.7231467,-116.3473807]).appendPoint([150.9987445,-114.9048879]).appendPoint([149.5562517,-128.6292901]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.7244881,-78.5134659],[150.4488903,-79.9559587]]).appendPoint([151.8913831,-66.2315565]).appendPoint([138.1669809,-64.7890637]).appendPoint([136.7244881,-78.5134659]).close().innerToCAG()
).union(
    new CSG.Path2D([[134.9475042,-95.4203381],[148.6719064,-96.8628309]]).appendPoint([150.1143992,-83.1384287]).appendPoint([136.389997,-81.6959359]).appendPoint([134.9475042,-95.4203381]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.1705203,-112.3272103],[146.8949225,-113.7697031]]).appendPoint([148.3374153,-100.0453009]).appendPoint([134.6130131,-98.6028081]).appendPoint([133.1705203,-112.3272103]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.3935364,-129.2340825],[145.1179386,-130.6765753]]).appendPoint([146.5604314,-116.9521731]).appendPoint([132.8360292,-115.5096803]).appendPoint([131.3935364,-129.2340825]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.7792678,-145.5361623],[161.50367,-146.9786551]]).appendPoint([162.9461628,-133.2542529]).appendPoint([149.2217606,-131.8117601]).appendPoint([147.7792678,-145.5361623]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.6165525,-146.1409547],[143.3409547,-147.5834475]]).appendPoint([144.7834475,-133.8590453]).appendPoint([131.0590453,-132.4165525]).appendPoint([129.6165525,-146.1409547]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        