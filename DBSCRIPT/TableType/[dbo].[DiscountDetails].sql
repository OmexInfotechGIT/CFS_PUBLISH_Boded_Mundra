USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  UserDefinedTableType [dbo].[ConsolidatorCharge]    Script Date: 8/12/2023 10:31:00 AM ******/
--DROP TYPE [DiscountDetails]
CREATE TYPE [dbo].[DiscountDetails] AS TABLE( 
	[trnDocumentID] [int] NULL,
	[TariffHeadID] [int] NULL,
	[TariffHead] [varchar](255) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[NetTaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,
	[Createdby] [bigint] NULL,
	[YearID] [int] NULL
)

GO

	 	  	 	 

 