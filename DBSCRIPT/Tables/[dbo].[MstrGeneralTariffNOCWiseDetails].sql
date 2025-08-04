USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[MstrGeneralTariffNOCWiseDetails]    Script Date: 02/02/2024 1:23:24 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(SELECT * FROM [CFS_BONDED_WAREHOUSE].Information_schema.Columns WHERE TABLE_NAME = 'MstrGeneralTariffNOCWiseDetails')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE].[dbo].[MstrGeneralTariffNOCWiseDetails]
END

CREATE TABLE [dbo].[MstrGeneralTariffNOCWiseDetails](
	[MstrGeneralTariffNOCWiseDetailsid] [int] IDENTITY(1,1) NOT NULL,
	[MstrGeneralTariffNOCWiseEffetiveDateID] [int] NULL,
	[trnDocumentID] [int] NULL,
	[trnDocumentNo] [varchar](255) NULL
) ON [PRIMARY]
GO


