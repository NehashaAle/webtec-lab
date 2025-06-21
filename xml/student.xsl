<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:"https://www.w3.org/XSL/Translate">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Students</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>contact</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="college/student">
                            <tr>
                                <td>
                                    <xsl:value-of select="name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="email"/>
                                </td>
                                <td>
                                    <xsl:value-of select="contact"/>
                                </td>
                                <td>
                                    <xsl:value-of select="address"/>
                                </td>
                                <td>
                                    <xsl:when test="marks>35">
                                pass
                                    </xsl:when>
                                    <xsl:otherwise>
                                fail
                                    </xsl:otherwise>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
                            
                            