
r=parseInt(prompt("Enter the number of rows")); //prompt returns a string
c=parseInt(prompt("Enter the number of columns"));
for(i=1;i<=r;i++)
{
    document.write("<div class=container>");
    for(j=1;j<=c;j++)
    {
        if((i+j)%2==0)
        {
            document.write("<div class=inner id=inner1></div>");
        }
        else
        {
            document.write("<div class=inner id=inner2></div>");
        }
    }
    document.write("</div>");
}
